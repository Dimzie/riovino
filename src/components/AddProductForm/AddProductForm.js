import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ProductSchema } from 'helpers/yupSchemas/projectSchemas';
import {
  AddIconWrapper,
  DeleteIconWrapper,
  FieldWrapper,
  ImageLabel,
  ImageText,
  ImageWrapper,
  Label,
  Span,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledOption,
  SubmitButton,
  Wrapper,
} from './AddProductForm.styled';
import { addProduct } from '../../redux/products/operations';
import { IoAddSharp } from 'react-icons/io5';
import { BsArrowClockwise } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { zaglushka } from '../../images/images.index';

const AddProductForm = ({ onCloseModal }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [subTypeValue, setSubTypeValue] = useState('');

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    type: '',
    subType: '',
    alcohol: '',
    capacity: '',
    price: '',
    region: '',
    discount: '',
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
    onCloseModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={handleSubmit}
    >
      {props => {
        const isValid = field =>
          props.touched[field] && props.errors[field] ? false : true;

        return (
          <StyledForm autoComplete="on">
            <Label>
              Title <Span>*</Span>
              <StyledField
                type="text"
                name="title"
                $isvalid={isValid('title')}
              />
              <ErrorMessage name="title" component={StyledErrorMessage} />
            </Label>
            <FieldWrapper>
              <Label>
                Type <Span>*</Span>
                <StyledField
                  onChange={e => {
                    setTypeValue(e.target.value);
                    setSubTypeValue('');
                    props.setFieldValue('type', e.target.value);
                    props.setFieldValue('subType', '');
                  }}
                  $isvalid={isValid('type')}
                  as="select"
                  name="type"
                  defaultValue=""
                >
                  <StyledOption value="" disabled hidden></StyledOption>
                  <StyledOption value="vinos">Vinos</StyledOption>
                  <StyledOption value="espumosos">Espumosos</StyledOption>
                  <StyledOption value="destilados">Destilados</StyledOption>
                </StyledField>
                <ErrorMessage name="type" component={StyledErrorMessage} />
              </Label>
              <Label>
                SubType <Span>*</Span>
                <StyledField
                  as="select"
                  name="subType"
                  defaultValue={subTypeValue}
                  disabled={!typeValue}
                  onChange={e => {
                    props.setFieldValue('subType', e.target.value);
                    setSubTypeValue(e.target.value);
                  }}
                  $isvalid={isValid('subType')}
                >
                  {typeValue === 'vinos' && (
                    <>
                      <StyledOption value="" hidden>
                        Select sub type
                      </StyledOption>
                      <StyledOption value="tinto">Tinto</StyledOption>
                      <StyledOption value="blanco">Blanco</StyledOption>
                      <StyledOption value="rosado">Rosado</StyledOption>
                      <StyledOption value="generoso">Generoso</StyledOption>
                      <StyledOption value="dulce">Dulce</StyledOption>
                      <StyledOption value="aranja">Naranja</StyledOption>
                      <StyledOption value="vermut">Vermut</StyledOption>
                    </>
                  )}
                  {typeValue === 'espumosos' && (
                    <>
                      <StyledOption value="" hidden>
                        Select sub type
                      </StyledOption>
                      <StyledOption value="champagne">Champagne</StyledOption>
                      <StyledOption value="cava">Cava</StyledOption>
                      <StyledOption value="corpinnat">Corpinnat</StyledOption>
                      <StyledOption value="prosecco">Prosecco</StyledOption>
                      <StyledOption value="otrosEspumosos">
                        Otros Espumosos
                      </StyledOption>
                    </>
                  )}

                  {typeValue === 'destilados' && (
                    <>
                      <StyledOption value="" hidden>
                        Select sub type
                      </StyledOption>
                      <StyledOption value="ron">Ron</StyledOption>
                      <StyledOption value="ginebra">Ginebra</StyledOption>
                      <StyledOption value="whisky">Whisky</StyledOption>
                      <StyledOption value="vodka">Vodka</StyledOption>
                      <StyledOption value="cognac">Cognac</StyledOption>
                      <StyledOption value="brandy">Brandy</StyledOption>
                      <StyledOption value="pastis">Pastis</StyledOption>
                      <StyledOption value="tequilaYMezcal">
                        TequilaYMezcal
                      </StyledOption>
                      <StyledOption value="grappaYAguardiente">
                        GrappaYAguardiente
                      </StyledOption>
                      <StyledOption value="calvados">Calvados</StyledOption>
                      <StyledOption value="licores">Licores</StyledOption>
                      <StyledOption value="pacharan">Pacharan</StyledOption>
                      <StyledOption value="aperitivos">Aperitivos</StyledOption>
                    </>
                  )}
                </StyledField>
                <ErrorMessage name="subType" component={StyledErrorMessage} />
              </Label>
            </FieldWrapper>

            {/* {typeValue === 'espumosos' && (
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
                ></StyledField>
                <ErrorMessage name="subType" component={StyledErrorMessage} />
              </Label>
            )} */}
            {/* {typeValue === 'destilados' && (
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
                ></StyledField>
                <ErrorMessage name="subType" component={StyledErrorMessage} />
              </Label>
            )} */}
            <Label>
              Region <Span>*</Span>
              <StyledField
                type="text"
                name="region"
                $isvalid={isValid('region')}
              />
              <ErrorMessage name="region" component={StyledErrorMessage} />
            </Label>
            <Label>
              Alcohol <Span>*</Span>
              <StyledField
                type="text"
                name="alcohol"
                $isvalid={isValid('alcohol')}
              />
              <ErrorMessage name="alcohol" component={StyledErrorMessage} />
            </Label>
            <Label>
              Capacity <Span>*</Span>
              <StyledField
                type="text"
                name="capacity"
                $isvalid={isValid('capacity')}
              />
              <ErrorMessage name="capacity" component={StyledErrorMessage} />
            </Label>
            <Label>
              Price <Span>*</Span>
              <StyledField
                type="text"
                name="price"
                $isvalid={isValid('price')}
              />
              <ErrorMessage name="price" component={StyledErrorMessage} />
            </Label>
            <Label>
              Discount
              <StyledField
                type="text"
                name="discount"
                $isvalid={isValid('discount')}
              />
              <ErrorMessage name="discount" component={StyledErrorMessage} />
            </Label>
            <ImageText>Add image</ImageText>
            <Wrapper>
              <ImageLabel>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  name="image"
                  onChange={event =>
                    handleFileChange(event, props.setFieldValue)
                  }
                />

                <AddIconWrapper>
                  {previewImage ? (
                    <BsArrowClockwise size={40} />
                  ) : (
                    <IoAddSharp size={40} />
                  )}
                </AddIconWrapper>
              </ImageLabel>
              <ImageWrapper>
                {previewImage && (
                  <DeleteIconWrapper
                    onClick={() => {
                      setPreviewImage(null);
                      props.setFieldValue('image', null);
                    }}
                  >
                    <MdDelete size={30} />
                  </DeleteIconWrapper>
                )}
                <img
                  src={previewImage ? previewImage : zaglushka}
                  alt="preview img"
                />
              </ImageWrapper>
            </Wrapper>
            <SubmitButton type="submit">Add product</SubmitButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddProductForm;
