import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import deleteIcon from "../assets/icons/delete.svg";

import "./CreateInvoiceForm.scss";

const NewInvoiceForm = ({ active, setActive }) => {
  let price = [0];

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
        <Formik
          initialValues={{
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
              },
            ],
          }}
          validationSchema={Yup.object({
            streetAddressFrom: Yup.string()
              .min(3, "Must be at least 3 characters long")
              .required("Required field"),
            city: Yup.string().required("Required field"),
            postCode: Yup.string().required("Required field"),
            country: Yup.string().required("Required field"),
            clientName: Yup.string().required("Required field"),
            clientEmail: Yup.string()
              .email("Invalid email address")
              .required("Required field"),
            streetAddressTo: Yup.string()
              .min(3, 'Must be at least 3 characters long"')
              .required("Required field"),
            clientCity: Yup.string().required("Required field"),
            clientPostCode: Yup.string().required("Required field"),
            clientCountry: Yup.string().required("Required field"),
            invoiceDate: Yup.string().required("Required field"),
            paymentTerms: Yup.string().required("Required field"),
            projectDescription: Yup.string().required("Required field"),
            items: Yup.array().of(
              Yup.object().shape({
                itemName: Yup.string().required("Required field"),
                quantity: Yup.number()
                  .min(0, "Must be a positive number")
                  .required("Required field"),
                price: Yup.number()
                  .min(0, "Must be a positive number")
                  .required("Required field"),
              })
            ),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form onClick={(e) => e.stopPropagation()}>
            <h3>New Invoice</h3>
            <h5>Bill From</h5>
            <label htmlFor="streetAddressFrom">Street Address</label>
            <Field
              type="text"
              id="streetAddressFrom"
              name="streetAddressFrom"
            />
            <ErrorMessage
              className="error"
              name="streetAddressFrom"
              component="div"
            />
            <div className="three-questions">
              <div className="question_wrapper">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  {...formik.getFieldProps("city")}
                />
              </div>
              <div className="question_wrapper">
                <label htmlFor="postCode">Post Code</label>
                <input
                  type="text"
                  id="postCode"
                  name="postCode"
                  {...formik.getFieldProps("postCode")}
                />
              </div>
              <div className="question_wrapper">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <h5>Bill To</h5>
            <label htmlFor="clientName">Client’s Name</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formik.values.clientName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.clientName && formik.touched.clientName ? (
              <div>{formik.errors.clientName}</div>
            ) : null}
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
            <div className="three-questions">
              <div className="question_wrapper">
                <label htmlFor="clientCity">City</label>
                <input
                  type="text"
                  id="clientCity"
                  name="clientCity"
                  value={formik.values.clientCity}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="question_wrapper">
                <label htmlFor="clientPostCode">Post Code</label>
                <input
                  type="text"
                  id="clientPostCode"
                  name="clientPostCode"
                  value={formik.values.clientPostCode}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="question_wrapper">
                <label htmlFor="clientCountry">Country</label>
                <input
                  type="text"
                  id="clientCountry"
                  name="clientCountry"
                  value={formik.values.clientCountry}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="two-questions">
              <div>
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  type="date"
                  id="invoiceDate"
                  name="invoiceDate"
                  value={formik.values.invoiceDate}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <input
                  type="select"
                  id="paymentTerms"
                  name="paymentTerms"
                  value={formik.values.paymentTerms}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
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
                  className="itemName"
                  value={formik.values.items[index].itemName}
                  onChange={formik.handleChange}
                />
                <input
                  type="number"
                  name={`items.${index}.quantity`}
                  className="quantity"
                  value={formik.values.items[index].quantity}
                  onChange={formik.handleChange}
                />
                <input
                  type="number"
                  name={`items.${index}.price`}
                  className="price"
                  value={formik.values.items[index].price}
                  onChange={formik.handleChange}
                />
                <p>{price[0]}</p>
                <button type="button" onClick={() => removeItem(index)}>
                  <img src={deleteIcon} alt="delete item icon" />
                </button>
              </div>
            ))}

            <button type="button" className="addItem_button" onClick={addItem}>
              + Add New Item
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
