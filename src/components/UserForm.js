import { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../validation/userSchema";
import { userFormConfig } from "../config/formConfig";

function UserForm({ open, onClose, onSubmit, defaultValues }) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({
  //   resolver: yupResolver(userSchema),
  //   defaultValues
  // });
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
      resolver: yupResolver(userSchema),
  defaultValues: defaultValues || {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  }
});

useEffect(() => {
  if (defaultValues) {
    reset(defaultValues);
  } else {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
  }
}, [defaultValues, reset, open]);


  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>User Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {userFormConfig.map(field => (
            <TextField
              key={field.name}
              label={field.label}
              fullWidth
              margin="normal"
              {...register(field.name)}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
            />
          ))}

          <Button variant="contained" type="submit">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UserForm;
