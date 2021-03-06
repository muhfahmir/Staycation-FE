import propTypes from "prop-types";
import React from "react";
import "./index.scss";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  // state local
  // const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  // perubahan berapa malam
  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) {
      value = value.replace(suffix);
    }

    const patternNumeric = new RegExp("[0-9]*");
    // const isNumeric = patternNumeric.test(value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      // setInputValue(

      // );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3 ", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text minus" onClick={minus}>
            -
          </div>
        </div>

        <input
          readOnly
          min={min}
          max={max}
          name={name}
          // pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
          onChange={onChange}
        />

        <div className="input-group-append">
          <div className="input-group-text plus" onClick={plus}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isSuffixPlural: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
