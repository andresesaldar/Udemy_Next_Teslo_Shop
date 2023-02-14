import { Button, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "@/layouts/AuthLayout";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";

const Register: NextPageWithLayout = () => (
	<Stack component="form" spacing={2}>
		<Typography variant="h6" component="h2">
			Register
		</Typography>
		<TextField label="Name" placeholder="Write your name here" required />
		<TextField
			label="Email"
			placeholder="Write your email here"
			type="email"
			required
		/>
		<TextField
			label="Password"
			placeholder="Write your password here"
			type="password"
			required
		/>
		<Button variant="contained" type="submit">
			Register
		</Button>
		<Stack alignItems="end">
			<Link href="/auth/login" style={{ color: "inherit" }}>
				Already have an account?
			</Link>
		</Stack>
	</Stack>
);

Register.getLayout = (page): ReactElement => (
	<AuthLayout
		title="Teslo shop - Register"
		description="Teslo shop client registration"
	>
		{page}
	</AuthLayout>
);

export default Register;
