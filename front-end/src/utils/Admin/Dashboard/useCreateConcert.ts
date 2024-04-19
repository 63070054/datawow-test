'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from "axios"
import httpRequest from '@/utils/axios/axiosInterceptor';
import useUser from '@/utils/store/useUser';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Dispatch } from 'react';

interface useCreateConcertProps {
  encodedUser: string;
  setActiveTab: Dispatch<number>;
}

export default function useCreateConcert({ encodedUser, setActiveTab }: useCreateConcertProps){

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Please input concert name"),
      description: yup.string().required("Please input description"),
      seat: yup.number().required("Please input seats"),
    })
    .required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });



  const createConcert = async (data: any) => {
    try {
      const result = await httpRequest.post("/concert", data, {
        headers: {
          authorization: encodedUser,
        },
      })
      await Swal.fire({
        title: "Success!",
        text: "You have created the new concert!",
        icon: "success"
      });


      await setActiveTab(0)

      console.log("result", result)
    } catch (err) {

      console.log("error", err)
    }

  }

  return {
    register,
    handleSubmit,
    errors,
    createConcert
  }


}