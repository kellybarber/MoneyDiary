// MAIN

var duration = 1500;
var color = d3.scale.category10();
var plotCols = ["contributions", "fee", "inflation", "interest"]; // categories to show on the plot
var color = d3.scale.ordinal().domain(plotCols).range(["#2ecc71", "#e74c3c", "#9b59b6", "#3498db", "#34495e", "#2ecc71"]);
var defaultCurrentAge = 25;
var defaultRetirementAge = 65;
var defaultInflation = 2; // (%)
var defaultRateOfReturn = 6.0; // (%)
var defaultFee = 1.2; // (%)
var defaultStartingValue = 20000; // ($)
var defaultContributions = 500; // frequence set by var contributionFreqPerYear
var defaultContribFreqPerYear = 12; // 12 -> monthly, 1 -> yearly, 3 -> quarterly
var defaultCompoundFreqPerYear = 1; // 12 -> monthly, 1 -> yearly, 3 -> quarterly
var defaultFeeFreqPerYear = 1; // 12 -> monthly, 1 -> yearly, 3 -> quarterly


var portfolios = d3.map(); // {name: Portfolio class}

/* Initialize

Adds a bootstrap container-fluid to
the div selector as well as various
inputs: sliders for current
age and retirement age as well as
a text input for portfolio name

Parameters:
===========
- div : html selector
        selector into which to add
        html
*/

function init(div) {

    var tmp = d3.select(div);

    var header = tmp.append("div")
        .attr("class","container-fluid")
        .attr("id","container")
      .append('div')
        .attr('class','row')
      .append('div')
        .attr('class','col-sm-12')

    // header.append('div')
    //     .attr('class','well')
    //     .html('<p class="lead">The charts below will detail how much you stand to earn/lose per year in interest, fees, inflation and contributions; or, if you toggle the switch, will show you the total portfolio value over time.  To add a new portfolio, enter a name and then click <button class="btn btn-info btn-sm"><i class="fa fa-plus fa-lg"></i></button><br></p><small class="muted">For suggestions or improvements, please leave a <a href="https://github.com/ConstantinoSchillebeeckx/financial_calculator">pull-request <i class="fa fa-github fa-2x" aria-hidden="true"></i></a></small>')


    header.append("div")
        .attr("class","row")

    var col1 = header.append('div')
        .attr('class','col-sm-3')


    ageSlider = new Slider();
    ageSlider.add(col1, 'Age range', null, 18, 80, 1, [defaultCurrentAge, defaultRetirementAge]);

    var col3 = header.append('div')
        .attr('class','col-sm-3')

    inflationSlider = new Slider();
    inflationSlider.add(col3, 'Inflation', '%', 0, 10, .1, defaultInflation);


    var col4 = header.append("div")
        .attr("class","col-sm-3")

    col4.append('label')
        .attr('class','portfolioLabel')
        .text('Portfolio name')

    var portName = col4.append('div')
        .attr('class','input-group')

    portName.append('input')
        .attr('type','text')
        .attr('class','form-control')
        .attr("id","portfolioName")
        .attr("value","Investment Wizard")
        .attr('placeholder','Investment Wizard')
        .attr("required",'')

    portName.append('span')
        .attr('class','input-group-btn')
      .append('button')
        .attr('class','btn btn-info')
        .attr("onclick","addPortfolio()")
        .attr('type','button')
        .html('<i class="fa fa-plus fa-lg" aria-hidden="true"></i>');

    addPortfolio();
}


