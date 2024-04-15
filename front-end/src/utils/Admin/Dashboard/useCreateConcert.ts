'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function useCreateConcert() {

  const schema = yup
    .object()
    .shape({
      concertName: yup.string().required("Please input concert name"),
      concertDescription: yup.string().required("Please input description"),
      amountSeats: yup.number().required("Please input seats"),
    })
    .required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const createConcert = (data: any) => {
    console.log("data", data)
  }

  return {
    register,
    handleSubmit,
    errors,
    createConcert
  }


}