import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ProductSchema } from 'helpers/yupSchemas/projectSchemas';
import {
  // AddCriticBtn,
  AddIconWrapper,
  // CriticContainer,
  // CriticDeleteBtn,
  // CriticName,
  DeleteIconWrapper,
  FieldWrapper,
  ImageLabel,
  ImageText,
  ImageWrapper,
  Label,
  // Li,
  // List,
  SpanSymbol,
  // SpanText,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledOption,
  SubmitButton,
  // Title,
  Wrapper,
} from '../AddProductForm/AddProductForm.styled';
import { updateProduct } from '../../redux/products/operations';
import { IoAddSharp } from 'react-icons/io5';
import { BsArrowClockwise } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { zaglushka } from '../../images/images.index';
import {
  critics,
  productDestilados,
  productEspumosos,
  productType,
  productVinos,
} from 'data/data';
import { useProducts } from 'hooks/useProducts';

const UpdateProductForm = ({ onCloseModal }) => {
  const { productById } = useProducts();
  const [previewImage, setPreviewImage] = useState(
    productById.imageURL || null
  );
  const [typeValue, setTypeValue] = useState(productById.type || '');
  // eslint-disable-next-line no-unused-vars
  const [subTypeValue, setSubTypeValue] = useState(productById.subType || '');
  const [critic, setCritic] = useState('');
  const [criticRate, setCriticRate] = useState('');
  const [criticsList, setCriticsList] = useState(productById.critics || []);
  const dispatch = useDispatch();

  const initialValues = {
    title: productById.title || '',
    type: productById.type || '',
    subType: productById.subType || '',
    alcohol: productById.alcohol || '',
    capacity: productById.capacity || '',
    price: productById.price || '',
    region: productById.region || '',
    discount: productById.discount || '',
    critics: productById.critics || [],
    image: null,
  };

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFieldValue('image', file);
    }
  };

  const handleAddCritic = (setFieldValue, critics) => {
    if (critic && criticRate) {
      // Create a critic object and add it to the list
      const newCritic = { critic, criticRate };
      setCriticsList(prev => [...prev, newCritic]);
      const updatedCritics = [...critics, newCritic];
      setFieldValue('critics', updatedCritics); // Update Formik's values

      // Reset critic fields
      setCritic('');
      setCriticRate('');
    }
  };
  console.log('productById.id', productById._id);

  const handleDeleteCritic = (criticToDelete, setFieldValue) => {
    // Filter out the critic that needs to be deleted
    const updatedCriticsList = criticsList.filter(
      item => item.critic !== criticToDelete
    );

    // Update the state
    setCriticsList(updatedCriticsList);

    // Update Formik's values
    setFieldValue('critics', updatedCriticsList);
  };

  const handleSubmit = async (values, actions) => {
    console.log('values', values);
    const id = productById._id;
    dispatch(updateProduct({ id, ...values }));
    actions.resetForm();
    onCloseModal();
  };

  return (
    <>
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
                Title <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="title"
                  $isvalid={isValid('title')}
                />
                <ErrorMessage name="title" component={StyledErrorMessage} />
              </Label>
              <FieldWrapper>
                <Label>
                  Type <SpanSymbol>*</SpanSymbol>
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
                    value={typeValue}
                  >
                    <StyledOption value="" hidden>
                      Select type
                    </StyledOption>
                    {productType.map(type => (
                      <StyledOption key={type.value} value={type.value}>
                        {type.name}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage name="type" component={StyledErrorMessage} />
                </Label>
                <Label>
                  SubType <SpanSymbol>*</SpanSymbol>
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
                        {productVinos.map(vinos => (
                          <StyledOption key={vinos.value} value={vinos.value}>
                            {vinos.name}
                          </StyledOption>
                        ))}
                      </>
                    )}
                    {typeValue === 'espumosos' && (
                      <>
                        <StyledOption value="" hidden>
                          Select sub type
                        </StyledOption>
                        {productEspumosos.map(espumosos => (
                          <StyledOption
                            key={espumosos.value}
                            value={espumosos.value}
                          >
                            {espumosos.name}
                          </StyledOption>
                        ))}
                      </>
                    )}

                    {typeValue === 'destilados' && (
                      <>
                        <StyledOption value="" hidden>
                          Select sub type
                        </StyledOption>
                        {productDestilados.map(destilados => (
                          <StyledOption
                            key={destilados.value}
                            value={destilados.value}
                          >
                            {destilados.name}
                          </StyledOption>
                        ))}
                      </>
                    )}
                  </StyledField>
                  <ErrorMessage name="subType" component={StyledErrorMessage} />
                </Label>
              </FieldWrapper>
              <Label>
                Region <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="region"
                  $isvalid={isValid('region')}
                />
                <ErrorMessage name="region" component={StyledErrorMessage} />
              </Label>
              <Label>
                Alcohol <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="alcohol"
                  $isvalid={isValid('alcohol')}
                />
                <ErrorMessage name="alcohol" component={StyledErrorMessage} />
              </Label>
              <Label>
                Capacity <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="capacity"
                  $isvalid={isValid('capacity')}
                />
                <ErrorMessage name="capacity" component={StyledErrorMessage} />
              </Label>
              <Label>
                Price <SpanSymbol>*</SpanSymbol>
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
              <FieldWrapper>
                <Label>
                  Critic
                  <StyledField
                    as="select"
                    name="critic"
                    value={critic}
                    // defaultValue={''}
                    onChange={e => setCritic(e.target.value)}
                    $isvalid={isValid('critic')}
                  >
                    <StyledOption value="" hidden>
                      Select critic
                    </StyledOption>
                    {critics.map(critic => (
                      <StyledOption key={critic} value={critic}>
                        {critic}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage name="critic" component={StyledErrorMessage} />
                </Label>

                <Label>
                  Critic Rate
                  <StyledField
                    type="number"
                    name="criticRate"
                    value={criticRate}
                    onChange={e => setCriticRate(e.target.value)}
                    disabled={!critic}
                    $isvalid={isValid('criticRate')}
                  />
                  <ErrorMessage
                    name="criticRate"
                    component={StyledErrorMessage}
                  />
                </Label>
              </FieldWrapper>

              <button
                disabled={
                  criticsList.length >= 4 ||
                  criticRate < 0 ||
                  criticRate > 100 ||
                  !Number.isInteger(+criticRate) ||
                  criticRate === ''
                }
                type="button"
                onClick={() =>
                  handleAddCritic(props.setFieldValue, props.values.critics)
                }
              >
                {criticsList.length >= 4
                  ? 'Maximum limit'
                  : criticRate < 0 ||
                    criticRate > 100 ||
                    !Number.isInteger(+criticRate)
                  ? 'Wrong number'
                  : 'Add critic'}
              </button>
              <ul style={{ backgroundColor: 'black' }}>
                {criticsList.map((item, index) => (
                  <li key={index}>
                    <p>
                      Critic: {item.critic}, Rate: {item.criticRate}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteCritic(item.critic, props.setFieldValue)
                      }
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>

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
              <SubmitButton type="submit">Update product</SubmitButton>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default UpdateProductForm;
