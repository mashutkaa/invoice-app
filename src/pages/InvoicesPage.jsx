import { useState } from "react";

import Invoice from "../components/Invoice";
import EmptyInvoices from "../components/EmptyInvoices";
import CreateInvoiceForm from "../components/CreateInvoiceForm";

import buttonIcon1 from "../assets/icons/Button1-icon.svg";
import dropdownIcon from "../assets/icons/dropdown.svg";

import styles from "./InvoicesPage.module.scss";

const Invoices = () => {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleChange = (selectedOptions) => {
  //   setSelectedOptions(selectedOptions);
  //   console.log(selectedOptions);
  // };

  const [formActive, setFormActive] = useState(false);

  let invoicesCount = 0;

  return (
    <section className={styles.invoicesPage_wrapper}>
      <div className={styles.header}>
        <div>
          <h1>Invoices</h1>
          <p>There are {invoicesCount} total invoices</p>
        </div>
        <div className={styles.header_buttons}>
          <div className={styles.filter}>
            <button>
              Filter by status
              <img src={dropdownIcon} alt="dropdown icon" />
            </button>
            <div className={styles.filter_dropdown}>
              <form>
                <label>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name="filter"
                    value="draft"
                  />
                  <span className={styles.customCheckbox}></span>
                  Draft
                </label>
                <label>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name="filter"
                    value="pending"
                  />
                  <span className={styles.customCheckbox}></span>
                  Pending
                </label>
                <label>
                  <input
                    className={styles.realCheckbox}
                    type="checkbox"
                    name="filter"
                    value="paid"
                  />
                  <span className={styles.customCheckbox}></span>
                  Paid
                </label>
              </form>
            </div>
          </div>
          <button
            className={styles.newInvoice_button}
            onClick={() => setFormActive(true)}
          >
            <img src={buttonIcon1} alt="icon on button" />
            New Invoice
          </button>
        </div>
      </div>
      <EmptyInvoices />
      <CreateInvoiceForm active={formActive} setActive={setFormActive} />
    </section>
  );
};

export default Invoices;
