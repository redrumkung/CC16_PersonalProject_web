import Input from "../../create/components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import usePost from "../../../hooks/use-post";
import {validateCreate} from '../../create/validations/validate-create'

const date = "Date";
const destination = "Destination";
const price = "Price";
const available = "Available";
const text = "Text";
const number = "Number";
const initial = {
  date: "",
  destination: "",
  price: "",
  available: "",
  coverImage:
    "https://images.pexels.com/photos/19376929/pexels-photo-19376929.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
};
export default function PostFrom( onSuccess ) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});
  console.log(error)

  const { createPost } = usePost();

  const submitPostForm = async (e) => {
    try {
      e.preventDefault()
      console.log('gggg')
      const validateError = validateCreate(input)
      if (validateError) {
        return setError(validateError)
      }
      console.log("asdasd")
      await createPost(input)
      toast.success('Create successfully')
      onSuccess()
      console.log("test")
    } catch (err) {
        console.log(err)
    }
};
const handleChangeInput = e => {
setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>Service Page</h1>
      <form onSubmit={submitPostForm}>
        <div className="flex justify-center">
          <div className="justify-center">
            <Input label={date} type={date} value={input.date} name="date" onChange={handleChangeInput} />
            <Input label={destination} type={text} value={input.destination} name="destination" onChange={handleChangeInput} />
            <Input label={price} type={number} value={input.price} name="price" onChange={handleChangeInput} />
            <Input label={available} type={number} value={input.available} name="available" onChange={handleChangeInput} />
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Cover</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
            <br></br>
            <div className="flex justify-center">
              <Button bg="orange" color="white">
                Create
              </Button>
            </div>
            <br></br>
          </div>
        </div>
      </form>
    </>
  );
}