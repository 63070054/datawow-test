'use client'
import Button from "@/components/Button";
import CardWithBorder from "@/components/CardWithBorder";
import Input from "@/components/Input";
import TextUnderline from "@/components/TextUnderline";
import useCreateConcert from "@/utils/Admin/Dashboard/useCreateConcert";
import { faSave, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminCreate() {

  const { register, handleSubmit, errors, createConcert } = useCreateConcert();

  console.log("errors", errors)

  return (
    <>
      <CardWithBorder>
        <form onSubmit={handleSubmit(createConcert)} className="flex flex-col gap-4">
          <TextUnderline text="Create" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Concert Name" register={register("concertName")} placeholder="Please input concert name" showErr={!!errors.concertName} errMsg={errors.concertName?.message}  />
            <Input label="Total of seat" register={register("amountSeats")} endIcon={faUser} type="number" showErr={!!errors.amountSeats} errMsg={errors.amountSeats?.message} defaultValue={0} />
          </div>
          <Input label="Total of seat" register={register("concertDescription")} multiline rows={5} placeholder="Please input description" showErr={!!errors.concertDescription} errMsg={errors.concertDescription?.message} />
          <Button type="submit" className="w-fit flex self-end">
            <div className="flex gap-2 justify-center items-center">
              <FontAwesomeIcon icon={faSave} />
              <p>Save</p>
            </div>
          </Button>
        </form>
      </CardWithBorder>
    </>
  )
}