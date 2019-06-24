import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form, { Group, Control } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card, { Body } from 'react-bootstrap/Card';
import useForm from './useForm';

export default ({ form, transformationCallback }) => {

  const { fields, submit } = form;
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Card>
          <Body>
            <Form>
              {fields.map(field => (
                <Group key={field.key}>
                  <Control
                    required={field.required}
                    onChange={(e) => { handleChange(field.name, e.target.value, transformationCallback); }}
                    value={values[field.name] || ''}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete="off" />
                </Group>
              ))}
              <Button onClick={handleSubmit} block variant={submit.variant} type={submit.type}>{submit.text}</Button>
            </Form>
          </Body>
        </Card>
      </Col>
    </Row>
  );
};
