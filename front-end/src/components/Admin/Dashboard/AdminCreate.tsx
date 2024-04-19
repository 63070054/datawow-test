'use client'
import Button from "@/components/Button";
import CardWithBorder from "@/components/CardWithBorder";
import Input from "@/components/Input";
import TextUnderline from "@/components/TextUnderline";
import useCreateConcert from "@/utils/Admin/Dashboard/useCreateConcert";
import useUser from "@/utils/store/useUser";
import { faSave, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { Dispatch } from "react";

interface AdminCreateProps {
  setActiveTab: Dispatch<number>;
}

export default function AdminCreate({ setActiveTab }: AdminCreateProps) {

  const { getEncodedUser } = useUser();

  const { register, handleSubmit, errors, createConcert } = useCreateConcert({
    encodedUser: getEncodedUser(),
    setActiveTab: setActiveTab
  });

  return (
    <>
      <CardWithBorder>
        <form onSubmit={handleSubmit(createConcert)} className="flex flex-col gap-4">
          <TextUnderline text="Create" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Concert Name" register={register("name")} placeholder="Please input concert name" showErr={!!errors.name} errMsg={errors.name?.message}  />
            <Input label="Total of seat" register={register("seat")} endIcon={faUser} type="number" showErr={!!errors.seat} errMsg={errors.seat?.message} defaultValue={0} />
          </div>
          <Input label="Concert description" register={register("description")} multiline rows={5} placeholder="Please input description" showErr={!!errors.description} errMsg={errors.description?.message} />
          <Button type="submit" className="w-full md:w-fit flex self-end">
            <div className="w-full flex gap-2 justify-center items-center">
              <FontAwesomeIcon icon={faSave} />
              <p>Save</p>
            </div>
          </Button>
        </form>
      </CardWithBorder>
    </>
  )
}