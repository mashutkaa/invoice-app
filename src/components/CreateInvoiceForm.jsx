import { useFormik } from "formik";

import deleteIcon from "../assets/icons/delete.svg";

import "./CreateInvoiceForm.scss";

const NewInvoiceForm = ({ active, setActive }) => {
  const formik = useFormik({
    initialValues: {
      streetAddressFrom: "",
      city: "",
      postCode: "",
      country: "",

      clientName: "",
      clientEmail: "",
      streetAddressTo: "",
      clientCity: "",
      clientPostCode: "",
      clientCountry: "",
      invoiceDate: "",
      paymentTerms: "",
      projectDescription: "",

      items: [
        {
          itemName: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const addItem = () => {
    formik.setFieldValue("items", [
      ...formik.values.items,
      { itemName: "", quantity: 1, price: "", total: "" },
    ]);
  };

  const removeItem = (index) => {
    const newItems = formik.values.items.filter((_, i) => i !== index);
    formik.setFieldValue("items", newItems);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modalContent">
        <form
          onSubmit={formik.handleSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>New Invoice</h3>
          <h5>Bill From</h5>
          <label htmlFor="streetAddressFrom">Street Address</label>
          <input
            type="text"
            id="streetAddressFrom"
            name="streetAddressFrom"
            value={formik.values.streetAddressFrom}
            onChange={formik.handleChange}
          />
          <div className="three-questions">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            <label htmlFor="postCode">Post Code</label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              value={formik.values.postCode}
              onChange={formik.handleChange}
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            />
          </div>

          <h5>Bill To</h5>
          <label htmlFor="clientName">Client’s Name</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formik.values.clientName}
            onChange={formik.handleChange}
          />
          <label htmlFor="clientEmail">Client’s Email</label>
          <input
            type="email"
            id="clientEmail"
            name="clientEmail"
            value={formik.values.clientEmail}
            onChange={formik.handleChange}
          />
          <label htmlFor="streetAddressTo">Street Address</label>
          <input
            type="text"
            id="streetAddressTo"
            name="streetAddressTo"
            value={formik.values.streetAddressTo}
            onChange={formik.handleChange}
          />
          <label htmlFor="clientCity">City</label>
          <input
            type="text"
            id="clientCity"
            name="clientCity"
            value={formik.values.clientCity}
            onChange={formik.handleChange}
          />
          <label htmlFor="clientPostCode">Post Code</label>
          <input
            type="text"
            id="clientPostCode"
            name="clientPostCode"
            value={formik.values.clientPostCode}
            onChange={formik.handleChange}
          />
          <label htmlFor="clientCountry">Country</label>
          <input
            type="text"
            id="clientCountry"
            name="clientCountry"
            value={formik.values.clientCountry}
            onChange={formik.handleChange}
          />
          <label htmlFor="invoiceDate">Invoice Date</label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            value={formik.values.invoiceDate}
            onChange={formik.handleChange}
          />
          <label htmlFor="paymentTerms">Payment Terms</label>
          <input
            type="select"
            id="paymentTerms"
            name="paymentTerms"
            value={formik.values.paymentTerms}
            onChange={formik.handleChange}
          />
          <label htmlFor="projectDescription">Project Description</label>
          <input
            type="text"
            id="projectDescription"
            name="projectDescription"
            value={formik.values.projectDescription}
            onChange={formik.handleChange}
          />

          <h4>Item List</h4>

          <div className="itemList-labels">
            <label htmlFor="">Item Name</label>
            <label htmlFor="">Qty.</label>
            <label htmlFor="">Price</label>
            <label htmlFor="">Total</label>
          </div>
          {formik.values.items.map((item, index) => (
            <div key={index} className="item-row">
              <input
                type="text"
                name={`items.${index}.itemName`}
                value={formik.values.items[index].itemName}
                onChange={formik.handleChange}
              />
              <input
                type="number"
                name={`items.${index}.quantity`}
                value={formik.values.items[index].quantity}
                onChange={formik.handleChange}
              />
              <input
                type="number"
                name={`items.${index}.price`}
                value={formik.values.items[index].price}
                onChange={formik.handleChange}
              />
              <input
                type="number"
                name={`items.${index}.total`}
                value={formik.values.items[index].total}
                readOnly
              />
              <button type="button" onClick={() => removeItem(index)}>
                <img src={deleteIcon} alt="delete item icon" />
              </button>
            </div>
          ))}

          <button type="button" onClick={addItem}>
            + Add New Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
