import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ProductSchema } from 'helpers/yupSchemas/projectSchemas';
import {
  AddCriticBtn,
  AddIconWrapper,
  CriticContainer,
  CriticDeleteBtn,
  CriticName,
  DeleteIconWrapper,
  FieldWrapper,
  ImageLabel,
  ImageText,
  ImageWrapper,
  Label,
  Li,
  List,
  ShortDesc,
  SpanSymbol,
  SpanText,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledOption,
  SubmitButton,
  Title,
  TitleH3,
  Wrapper,
} from './AddProductForm.styled';
import { addProduct } from '../../redux/products/operations';
import {
  critics,
  productDestilados,
  productEspumosos,
  productType,
  productVinos,
} from 'data/data';
import { CriticScore } from 'components/Items/CriticsItem/CriticsItem.styled';
import { sortedCritics } from 'helpers/functions/sortedCriticsAZ';
import { AddIcon, CloseIcon } from 'helpers/Icons/Icons.styled';

const AddProductForm = ({ onCloseModal }) => {
  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);
  const [typeValue, setTypeValue] = useState('');
  const [subTypeValue, setSubTypeValue] = useState('');
  const [critic, setCritic] = useState('');
  const [criticRate, setCriticRate] = useState('');
  const [criticsList, setCriticsList] = useState([]);

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    type: '',
    subType: '',
    alcohol: '',
    capacity: '',
    price: '',
    year: '',
    region: '',
    discount: '',
    critics: [],
    image1: null,
    image2: null,
    characteristic1: '',
    characteristic2: '',
    characteristic3: '',
    characteristic4: '',
    characteristic5: '',
  };

  const handleFileChange = (event, setFieldValue, setImageState, imageName) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setImageState(URL.createObjectURL(file));
      setFieldValue(imageName, file);
    }
  };

  const handleAddCritic = (setFieldValue, critics) => {
    if (critic && criticRate) {
      const newCritic = { critic, criticRate };
      setCriticsList(prev => [...prev, newCritic]);
      const updatedCritics = [...critics, newCritic];
      setFieldValue('critics', updatedCritics);
      setCritic('');
      setCriticRate('');
    }
  };

  const handleDeleteCritic = (criticToDelete, setFieldValue) => {
    const updatedCriticsList = criticsList.filter(
      item => item.critic !== criticToDelete
    );
    setCriticsList(updatedCriticsList);
    setFieldValue('critics', updatedCriticsList);
  };

  const handleSubmit = async (values, actions) => {
    console.log('values', values);
    dispatch(addProduct(values));
    actions.resetForm();
    onCloseModal();
  };

  const hasItems = criticsList.length > 0;

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
          <>
            <Title>Agregar un nuevo producto:</Title>
            <StyledForm autoComplete="on">
              <TitleH3>Principal:</TitleH3>
              <Label>
                <SpanText>Nombre </SpanText>
                <SpanSymbol>*</SpanSymbol>
                <StyledField
                  type="text"
                  name="title"
                  placeholder="Abadia de San Quirce Crianza"
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
                    <StyledOption
                      value=""
                      hidden
                      style={{ color: 'rgba(75, 192, 21, 0.5)' }}
                    >
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
              <ShortDesc>
                <Label>
                  Año
                  <StyledField
                    type="text"
                    name="year"
                    maxLength={4}
                    placeholder="2019"
                    $isvalid={isValid('year')}
                  />
                  <ErrorMessage name="year" component={StyledErrorMessage} />
                </Label>
                <Label>
                  Región <SpanSymbol>*</SpanSymbol>
                  <StyledField
                    type="text"
                    name="region"
                    $isvalid={isValid('region')}
                  />
                  <ErrorMessage name="region" component={StyledErrorMessage} />
                </Label>
              </ShortDesc>
              <ShortDesc>
                <Label>
                  Alcohol % <SpanSymbol>*</SpanSymbol>
                  <StyledField
                    type="text"
                    name="alcohol"
                    placeholder="12"
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
                  <ErrorMessage
                    name="capacity"
                    component={StyledErrorMessage}
                  />
                </Label>
              </ShortDesc>
              <ShortDesc>
                <Label>
                  Precio <SpanSymbol>*</SpanSymbol>
                  <StyledField
                    type="text"
                    name="price"
                    placeholder="34.50"
                    $isvalid={isValid('price')}
                  />
                  <ErrorMessage name="price" component={StyledErrorMessage} />
                </Label>
                <Label>
                  Descuento %
                  <StyledField
                    type="text"
                    name="discount"
                    defaultValue="0"
                    placeholder="0"
                    $isvalid={isValid('discount')}
                  />
                  <ErrorMessage
                    name="discount"
                    component={StyledErrorMessage}
                  />
                </Label>
              </ShortDesc>
              <TitleH3>Características:</TitleH3>
              <ShortDesc>
                <Label>
                  Suave / Tánico
                  <StyledField
                    as="select"
                    name="characteristic1"
                    defaultValue="0"
                    $isvalid={isValid('characteristic1')}
                    onChange={props.handleChange}
                  >
                    <StyledOption value="" hidden>
                      1
                    </StyledOption>
                    {Array.from({ length: 11 }, (_, i) => (
                      <StyledOption key={i} value={i}>
                        {i}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage
                    name="characteristic1"
                    component={StyledErrorMessage}
                  />
                </Label>
                <Label>
                  Débil / Ácido
                  <StyledField
                    as="select"
                    name="characteristic2"
                    defaultValue="0"
                    $isvalid={isValid('characteristic2')}
                    onChange={props.handleChange}
                  >
                    <StyledOption value="" hidden>
                      1
                    </StyledOption>
                    {Array.from({ length: 11 }, (_, i) => (
                      <StyledOption key={i} value={i}>
                        {i}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage
                    name="characteristic2"
                    component={StyledErrorMessage}
                  />
                </Label>
                <Label>
                  Seco / Dulce
                  <StyledField
                    as="select"
                    name="characteristic3"
                    defaultValue="0"
                    $isvalid={isValid('characteristic3')}
                    onChange={props.handleChange}
                  >
                    <StyledOption value="" hidden>
                      1
                    </StyledOption>
                    {Array.from({ length: 11 }, (_, i) => (
                      <StyledOption key={i} value={i}>
                        {i}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage
                    name="characteristic3"
                    component={StyledErrorMessage}
                  />
                </Label>
              </ShortDesc>
              <ShortDesc>
                <Label>
                  Ligero / Poderoso
                  <StyledField
                    as="select"
                    name="characteristic4"
                    defaultValue="0"
                    $isvalid={isValid('characteristic4')}
                    onChange={props.handleChange}
                  >
                    <StyledOption value="" hidden>
                      1
                    </StyledOption>
                    {Array.from({ length: 11 }, (_, i) => (
                      <StyledOption key={i} value={i}>
                        {i}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage
                    name="characteristic4"
                    component={StyledErrorMessage}
                  />
                </Label>
                <Label>
                  Amable / Burbujas
                  <StyledField
                    as="select"
                    name="characteristic5"
                    defaultValue="0"
                    $isvalid={isValid('characteristic5')}
                    onChange={props.handleChange}
                  >
                    <StyledOption value="" hidden>
                      1
                    </StyledOption>
                    {Array.from({ length: 11 }, (_, i) => (
                      <StyledOption key={i} value={i}>
                        {i}
                      </StyledOption>
                    ))}
                  </StyledField>
                  <ErrorMessage
                    name="characteristic5"
                    component={StyledErrorMessage}
                  />
                </Label>
              </ShortDesc>
              <TitleH3>Críticos:</TitleH3>
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
              <TitleH3>Foto:</TitleH3>
              <ImageText>
                {previewImage1 && previewImage2
                  ? 'Todas las fotos agregadas'
                  : previewImage1
                  ? 'Agregar una foto de atrás:'
                  : 'Agregar una foto frontal:'}
              </ImageText>
              <Wrapper>
                {!previewImage1 && (
                  <ImageLabel>
                    <input
                      style={{ display: 'none' }}
                      type="file"
                      name="image1"
                      onChange={event =>
                        handleFileChange(
                          event,
                          props.setFieldValue,
                          setPreviewImage1,
                          'image1'
                        )
                      }
                    />
                    <AddIconWrapper>
                      <AddIcon />
                    </AddIconWrapper>
                  </ImageLabel>
                )}
                {previewImage1 && (
                  <ImageWrapper>
                    <DeleteIconWrapper
                      onClick={() => {
                        setPreviewImage1(null);
                        props.setFieldValue('image1', null);
                      }}
                    >
                      <CloseIcon />
                    </DeleteIconWrapper>
                    <img src={previewImage1} alt="preview img" />
                  </ImageWrapper>
                )}
                {previewImage1 && !previewImage2 && (
                  <ImageLabel>
                    <input
                      style={{ display: 'none' }}
                      type="file"
                      name="image2"
                      onChange={event =>
                        handleFileChange(
                          event,
                          props.setFieldValue,
                          setPreviewImage2,
                          'image2'
                        )
                      }
                    />
                    <AddIconWrapper>
                      <AddIcon />
                    </AddIconWrapper>
                  </ImageLabel>
                )}

                {previewImage2 && (
                  <ImageWrapper>
                    <DeleteIconWrapper
                      onClick={() => {
                        setPreviewImage2(null);
                        props.setFieldValue('image2', null);
                      }}
                    >
                      <CloseIcon />
                    </DeleteIconWrapper>
                    <img src={previewImage2} alt="preview img" />
                  </ImageWrapper>
                )}
              </Wrapper>
              <SubmitButton type="submit">Añadir un producto</SubmitButton>
            </StyledForm>
          </>
        );
      }}
    </Formik>
  );
};

export default AddProductForm;
