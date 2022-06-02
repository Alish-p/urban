import { Form } from "react-bootstrap";

export default ({ field, handleChange, options, label }) => {
  return (
    <>
      <Form.Select
        className="position-relative mb-3"
        onChange={handleChange}
        name={field.name}
      >
        <option>{label}</option>

        {options.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </Form.Select>
    </>
  );
};
