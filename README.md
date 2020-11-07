# Get Started
1. Clone the repository to your local machine `git clone https://github.com/bobbyt1997/sp500-index-returns.git`
2. Install dependencies `npm install`.
3. Start server application `npm run start-dev`.
4. Navigate to localhost:3000 in your browser.

# Overview
The goal of this webpage was to mimic the table displaying the S&P 500 Total Returns shown at [Slickcharts](https://www.slickcharts.com/sp500/returns). The following additions were added:

1. A Range slider created using [rc-slider](https://github.com/react-component/slider) used to filter through returns by year.
2. A new column displaying cumulative returns based on what filter has or has not been added.