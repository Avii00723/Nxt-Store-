import React from 'react';
import {faker} from '@faker-js/faker';
import FormContainer from '@/components/form/FormContainer';
import { createProductAction } from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckboxInput from '@/components/form/CheckboxInput';
import { SubmitButton } from '@/components/form/Buttons';

function CreateProductPage() {
  const name=faker.commerce.productName();
  const company=faker.company.name();
  const description=faker.lorem.paragraph({min:10,max:12});


  return (<section>
    <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
    <div className="border p-8 rouded-md">
      <FormContainer action={createProductAction}>
        <div className='grid gap-4 md:grid-cols-2 my-4'>
        <FormInput type='text' name='name' defaultValue={name} label='product name' className='mb-4'/>
        <FormInput type='text' name='company' defaultValue={company} label='company name' className='mb-4'/>
        <PriceInput defaultValue={Number(faker.commerce.price())}/>
        <ImageInput />
        </div>
        <TextAreaInput name='description' defaultValue={description} labelText='product description'/>
        <div className="mt-8">
          <CheckboxInput name='featured' label='mark as featured?'/>
        </div>
        <SubmitButton text='create product' className='mt-8'/>
      </FormContainer>
    </div>
  </section>)
}

export default CreateProductPage