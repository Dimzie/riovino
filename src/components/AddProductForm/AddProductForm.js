import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ProductSchema } from 'helpers/yupSchemas/projectSchemas';
import {
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  SubmitButton,
} from './AddProductForm.styled';
import { addProduct } from '../../redux/products/operations';

const AddProductForm = ({ onModalClose }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [typeValue, setTypeValue] = useState('');
  const [setSubTypeValue] = useState('');

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    type: '',
    subType: '',
    alcohol: '',
    capacity: '',
    price: '',
    region: '',
    image: null,
  };

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFieldValue('image', file);
    }
  };

  const handleSubmit = async (values, actions) => {
    console.log('values', values);
    dispatch(addProduct(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={handleSubmit}
    >
      {props => {
        const isValid = field =>
          props.touched[field] && props.errors[field]
            ? 'is-inValid'
            : 'is-valid';

        return (
          <StyledForm autoComplete="on">
            <Label>
              Title
              <StyledField
                type="text"
                name="title"
                $isvalid={isValid('title')}
              />
              <ErrorMessage name="title" component={StyledErrorMessage} />
            </Label>
            <Label>
              Type
              <StyledField
                onChange={e => {
                  props.setFieldValue('type', e.target.value);
                  props.setFieldValue('subType', '');
                  setTypeValue(e.target.value);
                }}
                $isvalid={isValid('type')}
                as="select"
                name="type"
                defaultValue=""
              >
                <option value="" disabled hidden></option>
                <option value="vinos">Vinos</option>
                <option value="espumosos">Espumosos</option>
                <option value="destilados">Destilados</option>
              </StyledField>
              <ErrorMessage name="type" component={StyledErrorMessage} />
            </Label>
            {typeValue === 'vinos' && (
              <Label>
                SubType
                <StyledField
                  as="select"
                  name="subType"
                  defaultValue=""
                  onChange={e => {
                    props.setFieldValue('subType', e.target.value);
                    setSubTypeValue(e.target.value);
                  }}
                  $isvalid={isValid('subType')}
                >
                  <option value="" disabled hidden></option>
                  <option value="tinto">Tinto</option>
                  <option value="blanco">Blanco</option>
                  <option value="rosado">Rosado</option>
                  <option value="generoso">Generoso</option>
                  <option value="dulce">Dulce</option>
                  <option value="aranja">Naranja</option>
                  <option value="vermut">Vermut</option>
                </StyledField>
                <ErrorMessage name="subType" component={StyledErrorMessage} />
              </Label>
            )}
            {typeValue === 'espumosos' && (
              <Label>
                SubType
                <StyledField
                  as="select"
                  name="subType"
                  defaultValue=""
                  onChange={e => {
                    props.setFieldValue('subType', e.target.value);
                    setSubTypeValue(e.target.value);
                  }}
                  $isvalid={isValid('subType')}
                >
                  <option value="" disabled hidden></option>
                  <option value="champagne">Champagne</option>
                  <option value="cava">Cava</option>
                  <option value="corpinnat">Corpinnat</option>
                  <option value="prosecco">Prosecco</option>
                  <option value="otrosEspumosos">Otros Espumosos</option>
                </StyledField>
                <ErrorMessage name="subType" component={StyledErrorMessage} />
              </Label>
            )}
            {typeValue === 'destilados' && (
              <Label>
                SubType
                <StyledField
                  as="select"
                  name="subType"
                  defaultValue=""
                  onChange={e => {
                    props.setFieldValue('subType', e.target.value);
                    setSubTypeValue(e.target.value);
                  }}
                  $isvalid={isValid('subType')}
                >
                  <option value="" disabled hidden></option>
                  <option value="ron">Ron</option>
                  <option value="ginebra">Ginebra</option>
                  <option value="whisky">Whisky</option>
                  <option value="vodka">Vodka</option>
                  <option value="cognac">Cognac</option>
                  <option value="brandy">Brandy</option>
                  <option value="pastis">Pastis</option>
                  <option value="tequilaYMezcal">TequilaYMezcal</option>
                  <option value="grappaYAguardiente">GrappaYAguardiente</option>
                  <option value="calvados">Calvados</option>
                  <option value="licores">Licores</option>
                  <option value="pacharan">Pacharan</option>
                  <option value="aperitivos">Aperitivos</option>
                </StyledField>
                <ErrorMessage name="subType" component={StyledErrorMessage} />
              </Label>
            )}
            <Label>
              Alcohol
              <StyledField
                type="text"
                name="alcohol"
                $isvalid={isValid('alcohol')}
              />
              <ErrorMessage name="alcohol" component={StyledErrorMessage} />
            </Label>
            <Label>
              Capacity
              <StyledField
                type="text"
                name="capacity"
                $isvalid={isValid('capacity')}
              />
              <ErrorMessage name="capacity" component={StyledErrorMessage} />
            </Label>
            <Label>
              Price
              <StyledField
                type="text"
                name="price"
                $isvalid={isValid('price')}
              />
              <ErrorMessage name="price" component={StyledErrorMessage} />
            </Label>
            <Label>
              Region
              <StyledField
                type="text"
                name="region"
                $isvalid={isValid('region')}
              />
              <ErrorMessage name="region" component={StyledErrorMessage} />
            </Label>
            <Label>
              Image
              <input
                type="file"
                name="image"
                onChange={event => handleFileChange(event, props.setFieldValue)}
              />
            </Label>
            <SubmitButton type="submit">Add product</SubmitButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddProductForm;
