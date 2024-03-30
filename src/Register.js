import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from './action/cartAction';
import Table from 'react-bootstrap/Table';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { LockFill,  ShieldFillExclamation } from 'react-bootstrap-icons';

const Register = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();
  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };
  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

    
  const countries = [
    "Select a country",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "India",
  

  ];  
  const usStates = [
    "Select a state",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
  
  ];
  const OnRegister = async (data) => {
       
    try {
      const response = await fetch("http://localhost:5006/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          companyName: data.companyName,
          state: data.state,
          country: data.country,
          city: data.city,
          zipcode: data.zipcode,
          houseNumber:data.houseNumber,
          apartmentUnit:data.apartmentUnit,
          phoneNumber: data.phoneNumber,
          additionalInformation:data.additionalInformation,
        }),
      });
      
  
      if (response.ok) {
        console.log(data);
        // setMessage("Your registration has been successfully submitted!!!");
        // setShowSuccessMessage(true);
      } else {
        console.error("Error submitting registration:", response.status);
        // setMessage("Error submitting registration. Please try again.");      
     }
    } catch (error) {
      console.error("Error during registration:", error);
    //   setMessage("Error during registration. Please try again.");
    }
  };


  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .max(20, 'Username must be at most 20 characters')
      .required('Username is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    companyName: Yup.string().required('Company name is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'City must contain only alphabetic characters')
      .required('City is required'),
    zipcode: Yup.string()
      .matches(/^\d{6}$/, 'ZIP code must be exactly 6 numbers')
      .required('ZIP code is required'),
    houseNumber: Yup.number().required('House number is required').typeError('House number must be a number'),
    apartmentUnit: Yup.string(),
    phoneNumber: Yup.string().required('Phone number is required'),
    additionalInformation: Yup.string(),
  });

  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          firstName: '',
          lastName: '',
          companyName: '',
          state: 'US',
          houseNumber: '',
          apartmentUnit: '',
          city: '',
          country: '',
          zipcode: '',
          phoneNumber: '',
          additionalInformation: '',
        }}
        validationSchema={validationSchema} // Pass validation schema to Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            OnRegister (values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Card>
              <Row>
                <Col className='customer sm={12} md={8} mt-5 ml-3'>
                  <Col><h4>Customer information</h4></Col>
                  <Col className=''></Col>
                  <Col className='mt-4'>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username or Email Address"
                      aria-label="Username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error-message">{formik.errors.username}</div>
                  </Col>
                 
                  <Col className='mt-4'><h4>Billing details</h4></Col>
                  <Row>
                    <Col className='mt-4 md={3}'>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        aria-label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                         <div className="error-message">{formik.errors.firstName}</div>
                    </Col>
                    <Col className='mt-4 md={3}'>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        aria-label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                          <div className="error-message">{formik.errors.lastName}</div>
                    </Col>
                  </Row>
                  <Col className='mt-4'>
                    <Form.Control
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      aria-label="Company Name"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />   
                   <div className="error-message">{formik.errors.companyName}</div>
                  </Col>
                  <Col className='mt-4'>
                  <Form.Control
                as="select"
                name="country"
                aria-label="Country"
                value={formik.values.country}
                onChange={(e) => {
                    formik.setFieldValue('country', e.target.value); // Update Formik state
                    if (e.target.value === "United States") {
                    formik.setFieldValue('state', ''); // Reset state field if country is United States
                    }
                }}
                onBlur={formik.handleBlur}
                >
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                    {country}
                    </option>
                ))}
                </Form.Control>
                <div className="error-message">{formik.errors.country}</div>
                {formik.values.country === "United States" && (
                <Form.Control
                    as="select"
                    name="state"
                    aria-label="State"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    {usStates.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                    ))}
                </Form.Control>
                )}
                <div className="error-message">{formik.errors.state}</div>
                  </Col>
                  <Row>
                    <Col className='mt-3'>
                    <Form.Control
                      type="number"
                      name="houseNumber"
                      placeholder="House Number"
                      aria-label="House Number"
                      value={formik.values.houseNumber}
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/, ''); // Remove non-numeric characters
                        formik.setFieldValue('houseNumber', numericValue); // Update Formik state
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <div className="error-message">{formik.errors.houseNumber}</div>   
                 </Col>
                    <Col className='mt-3'>
                      <Form.Control
                        type="text"
                        name="apartmentUnit"
                        placeholder="Apartment, Suite, Unit, etc. (Optional)"
                        aria-label="Apartment Unit"
                        value={formik.values.apartmentUnit}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='mt-3'>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="City"
                      aria-label="City"
                      value={formik.values.city}
                      onChange={(e) => {
                        const alphaValue = e.target.value.replace(/[^A-Za-z\s]/, ''); // Remove non-alphabetic characters
                        formik.setFieldValue('city', alphaValue); // Update Formik state
                      }}
                      onBlur={formik.handleBlur}
                    />
                     <div className="error-message">{formik.errors.city}</div>
                    </Col>
                    <Col className='mt-3'>
                    <Form.Control
                      as="select"
                      name="country"
                      aria-label="Country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </Form.Control>
                    <div className="error-message">{formik.errors.country}</div>
                    </Col>
                    <Col className='mt-3'>
                      <Form.Control
                        type="text"
                        name="zipcode"
                        placeholder="ZIP Code"
                        aria-label="ZIP Code"
                        value={formik.values.zipcode}
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(/\D/, ''); // Remove non-numeric characters
                          const truncatedValue = numericValue.slice(0, 6); // Limit input to 6 characters
                          formik.setFieldValue('zipcode', truncatedValue); // Update Formik state
                        }}
                        onBlur={formik.handleBlur}
                      /><div className="error-message">{formik.errors.zipcode}</div>
                     
                    </Col>
                  </Row>
                  <Col className='mt-3'>
                   <Form.Control
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    aria-label="Mobile Number"
                    maxLength={10} // Limit input to 10 characters
                    value={formik.values.phoneNumber}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters globally
                      const truncatedValue = numericValue.slice(0, 10); // Limit input to 10 characters
                      formik.setFieldValue('phoneNumber', truncatedValue); // Update Formik state
                    }}
                    onBlur={formik.handleBlur}
                  />
                   </Col>

                  <Col className='mt-5'><h4>Additional information</h4></Col>
                  <Col className='mt-4'>
                    <Form.Control
                      as="textarea"
                      name="additionalInformation"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      aria-label="Additional Information"
                      value={formik.values.additionalInformation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Col>

                  <Col className='cou-pen mt-4'><h3>Have a Coupon?</h3></Col>
                  <Col className='pay-me-nt mt-4'><h4>Payment</h4></Col>
                  <table border={1} className='Information'>
                    <div className='Information1'>
                    <ShieldFillExclamation className='icon'/> Sorry, it seems that there are
                    no available payment methods. Please contact us if you require assistance or wish to make 
                    alternate arrangements.
                    </div>
                    </table>
                    <button type="submit"  className='buttonregs'><LockFill/>PlaceOrder</button>
                     <Col className='mt-5'></Col>
                     </Col>
                 <Col className='or-der sm={12} md={4}'>
                     <Col className='yu-res mt-5'><b>    YOUR ORDER</b></Col>
                     <Col className='order'><Table responsive="sm">
                    <thead>
                        <tr>
                        <th className='pr-esaer'>Product</th>
                        <th>Subtotal</th>
                        </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                    <tr key={item.id}><p className='Subtot'>
                        <td className='Subtot'>
                        <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                        {item.name} × {item.quantity}
                        </td>
                        <td className='Subtot'>${item.price * item.quantity}.00</td></p>
                    </tr>
                    ))}
                    <tr>
                    <td className='Subtot'>Subtotal</td>
                    <td className='Subtot'>${getTotalCost()}.00</td>
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td>${getTotalCost()}.00</td>
                    </tr>
                </tbody>
                </Table>
                </Col>
            </Col>
        <Col className='or-der sm={12} md={4}'>{/* Your order section */}</Col>
 </Row>
 </Card>
 </Form>
 )}
</Formik>
</Container>
  );
};
export default Register;
// // RegistrationForm.js
// import React, { useState, useEffect } from 'react';

// function Register() {
//   const [isOnForm, setIsOnForm] = useState(true);

//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       if (!isOnForm) {
//         const confirmationMessage = 'Are you sure you want to leave this page?';
//         event.returnValue = confirmationMessage;
//         return confirmationMessage;
//       }
//     };

//     const handlePopstate = () => {
//       if (!isOnForm) {
//         alert('You are back to the registration form.');
//       }
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);
//     window.addEventListener('popstate', handlePopstate);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//       window.removeEventListener('popstate', handlePopstate);
//     };
//   }, [isOnForm]);

//   const handleRefresh = () => {
//     setIsOnForm(true);
//     alert('You are back to the registration form.');
//   };

//   return (
//     <div>
//       {isOnForm ? (
//         <form>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" />
//           {/* Other form fields */}
//           <button type="submit">Submit</button><br></br>
//           <button onClick={() => setIsOnForm(false)}>Leave Form</button>
//         </form>
//       ) : (
//         <div>
//           <p>You are not on the registration form.</p>
//           <button onClick={handleRefresh}>Refresh</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;
