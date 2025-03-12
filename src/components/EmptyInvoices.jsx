import noInvoicesImg from '../assets/img/no-invoices.png';

import styles from './EmptyInvoices.module.scss';

const EmptyInvoices = () => {
  return (
    <div className={styles.emptyInvoices_wrapper}>
      <img src={noInvoicesImg} alt="Empty invoices list img" />
      <div>
        <h2>There is nothing here</h2>
        <p>Create an invoice by clicking the <br/> 
        <span>New Invoice</span> button and get started</p>
      </div>
    </div>
  )
}

export default EmptyInvoices
