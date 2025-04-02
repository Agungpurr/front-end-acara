import { Button, Card, CardBody, Image, Input, Link } from "@nextui-org/react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <Image src="/images/general/logo.svg" alt="logo" className="w-24" />
        <Image
          src="/images/illustrations/login.svg"
          alt="login"
          className="w-full max-w-xs"
        />
      </div>
      <Card className="w-full max-w-sm">
        <CardBody className="p-6">
          <h2 className="text-xl font-bold text-danger-600">Create Account</h2>
          <p className="mb-4 text-sm">
            Have an account?&nbsp;
            <Link href="/login" className="font-semibold text-danger-400">
              Login here
            </Link>
          </p>
          <form className="flex flex-col gap-4">
            <Input
              type="text"
              label="Fullname"
              variant="bordered"
              autoComplete="off"
              className="w-full"
            />
            <Input
              type="text"
              label="Username"
              variant="bordered"
              autoComplete="off"
              className="w-full"
            />
            <Input
              type="email"
              label="Email"
              variant="bordered"
              autoComplete="off"
              className="w-full"
            />
            <Input
              type={visiblePassword.password ? "text" : "password"}
              label="Password"
              variant="bordered"
              autoComplete="off"
              className="w-full"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("password")}
                >
                  {visiblePassword.password ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Input
              type={visiblePassword.passwordConfirmation ? "text" : "password"}
              label="Password Confirmation"
              variant="bordered"
              autoComplete="off"
              className="w-full"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("passwordConfirmation")}
                >
                  {visiblePassword.passwordConfirmation ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Button color="danger" size="lg" type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
