import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import '../public/style.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: this.props.lowerBound,
      upperBound: this.props.upperBound,
      value: [this.props.lowerBound, this.props.upperBound],
    };

    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({ value });
    this.props.updateTable(value);
  }

  render() {
    return (
      <div className="slider">
        <p>Filter Year</p>
        <Range
          allowCross={false}
          defaultValue={[this.state.lowerBound, this.state.upperBound]}
          min={this.state.lowerBound}
          max={this.state.upperBound}
          onAfterChange={this.onSliderChange}
          railStyle={{
            height: 2
          }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -14,
            backgroundColor: "Black",
            border: 0
          }}
          trackStyle={{
            background: "none"
          }}
        />
      </div>
    )
  }
}

