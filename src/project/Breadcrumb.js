import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb className='product-router-path'>
      <Breadcrumb.Item href="#" className='product-router-list'>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" className='product-router-list'>
        Living Room
      </Breadcrumb.Item>
      <Breadcrumb.Item className='product-router-list'>
      Sofa
      </Breadcrumb.Item>
      <Breadcrumb.Item className='product-router-list'>Green Living Room Sofa</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;