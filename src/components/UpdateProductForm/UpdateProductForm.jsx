import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ProductSchema } from 'helpers/yupSchemas/projectSchemas';
import {
  AddCriticBtn,
  // AddCriticBtn,
  AddIconWrapper,
  CriticContainer,
  CriticDeleteBtn,
  CriticName,
  // CriticContainer,
  // CriticDeleteBtn,
  // CriticName,
  DeleteIconWrapper,
  FieldWrapper,
  ImageLabel,
  ImageText,
  ImageWrapper,
  Label,
  Li,
  List,
  // Li,
  // List,
  SpanSymbol,
  SpanText,
  // SpanText,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledOption,
  SubmitButton,
  Title,
  // Title,
  Wrapper,
} from '../AddProductForm/AddProductForm.styled';
import { updateProduct } from '../../redux/products/operations';
import {
  critics,
  productDestilados,
  productEspumosos,
  productType,
  productVinos,
} from 'data/data';
import { useProducts } from 'hooks/useProducts';
import { AddIcon, CloseIcon } from 'helpers/Icons/Icons.styled';
import { CriticScore } from 'components/Items/CriticsItem/CriticsItem.styled';
import { sortedCritics } from 'helpers/functions/sortedCriticsAZ';

const UpdateProductForm = ({ onCloseModal }) => {
  const { productById } = useProducts();
  const [previewImage, setPreviewImage] = useState(
    productById.imageURL || null
  );
  const [typeValue, setTypeValue] = useState(productById.type || '');
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

  const hasItems = criticsList.length > 0;

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
          <>
            <Title>Cambiar el producto seleccionado:</Title>
            <StyledForm autoComplete="on">
              <Label>
                <SpanText>Nombre </SpanText>
                <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="title"
                  $isvalid={isValid('title')}
                />
                <ErrorMessage name="title" component={StyledErrorMessage} />
              </Label>
              <FieldWrapper>
                <Label>
                  Categoría <SpanSymbol>*</SpanSymbol>
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
                    <StyledOption value="" hidden>
                      Seleccionar сategoría
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
                  Tipo <SpanSymbol>*</SpanSymbol>
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
                          Seleccionar tipo
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
                          Seleccionar tipo
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
                          Seleccionar tipo
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
                Región <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="region"
                  $isvalid={isValid('region')}
                />
                <ErrorMessage name="region" component={StyledErrorMessage} />
              </Label>
              <Label>
                Alcohol % <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="alcohol"
                  $isvalid={isValid('alcohol')}
                />
                <ErrorMessage name="alcohol" component={StyledErrorMessage} />
              </Label>
              <Label>
                Capacidad <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="capacity"
                  $isvalid={isValid('capacity')}
                />
                <ErrorMessage name="capacity" component={StyledErrorMessage} />
              </Label>
              <Label>
                Precio <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="price"
                  $isvalid={isValid('price')}
                />
                <ErrorMessage name="price" component={StyledErrorMessage} />
              </Label>
              <Label>
                Descuento
                <StyledField
                  type="text"
                  name="discount"
                  $isvalid={isValid('discount')}
                />
                <ErrorMessage name="discount" component={StyledErrorMessage} />
              </Label>
              <FieldWrapper>
                <Label>
                  Críticos
                  <StyledField
                    as="select"
                    name="critic"
                    value={critic}
                    defaultValue={''}
                    onChange={e => setCritic(e.target.value)}
                    $isvalid={isValid('critic')}
                  >
                    <StyledOption value="" hidden>
                      Seleccionar crítico
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
                  Tasa crítica
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
              <AddCriticBtn
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
                  ? 'Límite máximo'
                  : criticRate < 0 ||
                    criticRate > 100 ||
                    !Number.isInteger(+criticRate)
                  ? 'Número equivocado'
                  : 'Agregar crítico'}
              </AddCriticBtn>
              <List hasItems={hasItems}>
                {sortedCritics(criticsList).map((item, index) => (
                  <Li key={index}>
                    <CriticContainer>
                      <CriticScore>{item.criticRate}</CriticScore>
                      <CriticDeleteBtn
                        type="button"
                        onClick={() =>
                          handleDeleteCritic(item.critic, props.setFieldValue)
                        }
                      >
                        X
                      </CriticDeleteBtn>
                    </CriticContainer>
                    <CriticName isSpecial={item.critic === 'Rio Vino'}>
                      {item.critic}
                    </CriticName>
                  </Li>
                ))}
              </List>
              <ImageText>Añadir una imagen:</ImageText>
              <Wrapper>
                {!previewImage && (
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
                      <AddIcon />
                    </AddIconWrapper>
                  </ImageLabel>
                )}
                {previewImage && (
                  <ImageWrapper>
                    <DeleteIconWrapper
                      onClick={() => {
                        setPreviewImage(null);
                        props.setFieldValue('image', null);
                      }}
                    >
                      <CloseIcon />
                    </DeleteIconWrapper>
                    <img src={previewImage} alt="preview img" />
                  </ImageWrapper>
                )}
              </Wrapper>
              <SubmitButton type="submit">Guardar cambios</SubmitButton>
            </StyledForm>
          </>
        );
      }}
    </Formik>
    </>
  );
};

export default UpdateProductForm;
