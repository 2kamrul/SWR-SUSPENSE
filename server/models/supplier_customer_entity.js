const { Sequelize } = require('sequelize');
const { db_dashboard } = require('../database/database')


const defaultProps = {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
}

const SUPPLIER_CUSTOMER_ENTITY_SCH = db_dashboard.define('SUPPLIER_ENTITY', {
    request_for: Sequelize.STRING,
    type: Sequelize.STRING,
    unit: Sequelize.STRING,
    nature_of_organization: Sequelize.STRING,
    commodity: Sequelize.STRING,
    code: Sequelize.STRING,
    status: Sequelize.STRING,
    company_name: Sequelize.STRING,
    vendor_contact_person: Sequelize.STRING,
    vendor_phone: Sequelize.STRING,
    vendor_email: Sequelize.STRING,
    vendor_contact_person_two: Sequelize.STRING,
    vendor_phone_two: Sequelize.STRING,
    vendor_email_two: Sequelize.STRING,
    vendor_contact_person_three: Sequelize.STRING,
    vendor_phone_three: Sequelize.STRING,
    vendor_email_three: Sequelize.STRING,
    vendor_email_additional: Sequelize.STRING,
    vendor_nid: Sequelize.STRING,
    vendor_tin_no: Sequelize.STRING,
    vendor_vat_reg_no: Sequelize.STRING,
    bank_account_name: Sequelize.STRING,
    bank_account_number: Sequelize.STRING,
    bank_name: Sequelize.STRING,
    routing_number: Sequelize.STRING,
    swift_code: Sequelize.STRING,
    ledger: Sequelize.STRING,
    financial_division: Sequelize.STRING,
    entity_code_description: Sequelize.STRING,
    address_one: Sequelize.STRING,
    address_two: Sequelize.STRING,
    zone_or_source: Sequelize.STRING,
    beximco_contact_person: Sequelize.STRING,
    country_name: Sequelize.STRING,
    beximco_contact_person_phone: Sequelize.STRING,
    beximco_contact_person_extension: Sequelize.STRING,
    country_code: Sequelize.STRING,
    currency: Sequelize.STRING,

    att_etin_path: Sequelize.STRING,
    att_bin_path: Sequelize.STRING,
    att_incorporation_certificate_path: Sequelize.STRING,
    att_trade_license_path: Sequelize.STRING,
    att_bank_cheque_path: Sequelize.STRING,
    att_nid_path: Sequelize.STRING,

    requestor_remark: Sequelize.STRING,
    requested_by: Sequelize.STRING,
    requested_on: { type: Sequelize.STRING, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    approved_by: Sequelize.STRING,
    approved_on: Sequelize.STRING,
    created_by_ifm: Sequelize.STRING,
    created_on_ifm: Sequelize.STRING,
    completed_by_tim: Sequelize.STRING,
    completed_on_tim: Sequelize.STRING,
}, { ...defaultProps })


const CUSTOMERS_SCH = db_dashboard.define('Customers', {
    Code: Sequelize.STRING,

    Buyer_Name: Sequelize.STRING,
}, { ...defaultProps })

module.exports = {
    SUPPLIER_CUSTOMER_ENTITY_SCH,
    CUSTOMERS_SCH
}