import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import { CiStar } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import './Description.css';
import FormLabel from 'react-bootstrap/esm/FormLabel';

const Reviews = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        email: '',
        rating: '',
        checkbox: false,
      });
    
      const [errors, setErrors] = useState({});
      const [rating, setRating] = useState(null);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating === rating ? null : selectedRating);
  };

      
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();console.log(formData)
    

    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    if (!formData.rating) {
      errors.rating = 'Rating is required';
    }

    if (Object.keys(errors).length === 0) {
        console.log('Form submitted:', formData);
      } else {
        setErrors(errors);
      }
    };
   
    
  return (
    <Form onSubmit={handleSubmit}>
    <Card className='review-card'>
       
        <Card className='review-cards' >
            <Card.Title className='review-title'>
            Be the first to review “Green Living Room Sofa”
            </Card.Title>
            <Card.Text className='review-text'>
            Your email address will not be published. Required fields are marked *
            </Card.Text>
            <Card.Text className='review-rating'>
                Your Ratings 
               <span className='review-star-rating' onClick={handleStarClick}> <CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></span>
            </Card.Text>
            <Row>
                <FormLabel column lg={12} className='card-context'>
                    Your Review
                    </FormLabel>
                <Form.Control type="text" className='review-comment' name='message' 
                 value={formData.message}
                 onChange={handleChange}
                required />
                 {errors.message && <span>{errors.message}</span>}
            </Row>
            <Form className='card-form-review'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName" className='review-column-grid'>
                        <Form.Label className='card-validation' >Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" className='review-form-control' name='name' 
                        value={formData.name}
                        onChange={handleChange}
                        required />
                         {errors.name && <span>{errors.name}</span>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className='review-column-grid' >
                        <Form.Label className='card-validation'>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Email" className='review-form-control'  name='email' 
                         value={formData.email}
                         onChange={handleChange}
                        required >
                            {errors.email && <span>{errors.email}</span>}
                        </Form.Control>
                        </Form.Group>
                        </Row>
                        </Form>
                        <Form.Group className="checkbox-review" id="formGridCheckbox" >
                            <Form.Check
                            className='checkbox-validation'
                            type="checkbox" name='checkbox'label="Save my name, email, and website in this browser for the next time I comment." 
                            checked={formData.checkbox}
                            onChange={handleChange}
                            required />
                        </Form.Group>
                        <Button variant='warning' type='submit'
                        className='submit-button'
                        >Submit</Button>
        </Card>
    </Card>
    </Form>
  )
}

export default Reviews