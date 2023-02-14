import { Button, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "@/layouts/AuthLayout";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";

const Login: NextPageWithLayout = () => (
	<Stack component="form" spacing={2}>
		<Typography variant="h6" component="h2">
			Login
		</Typography>
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
			Login
		</Button>
		<Stack alignItems="end">
			<Link href="/auth/register" style={{ color: "inherit" }}>
				Create an account?
			</Link>
		</Stack>
	</Stack>
);

Login.getLayout = (page): ReactElement => (
	<AuthLayout
		title="Teslo shop - Login"
		description="Teslo shop client login"
	>
		{page}
	</AuthLayout>
);

export default Login;
