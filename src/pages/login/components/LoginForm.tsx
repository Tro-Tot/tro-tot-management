import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Google from '@/assets/images/Google.png';
import SelectRole from './SelectRole';
import { loginApi as loginStaffApi } from '@/utils/api/staff/authApi';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../slice';
import { resolveSoa } from 'dns';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoginForm: React.FC = ({ className, ...props }: UserAuthFormProps) => {
  const dispatch = useDispatch();
  // const [userName, setUserName] = React.useState("");
  const navigate = useNavigate();
  // const handleGoogleLogin = () => {
  //     window.location.replace(devEnvGoogleAuth());
  // };
  const { toast } = useToast()
  const VALUES = ['staff', 'tech', 'manager'] as const;
  const formSchema = z.object({
    // email: z.string().email({
    //   message: 'Invalid email format.',
    // }),
    email: z.string(),
    password: z.string(),
    // password: z
    //   .string()
    //   .min(8, {
    //     message:
    //       'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    //   })
    //   .regex(/[A-Z]/, {
    //     message: 'Password must contain at least one uppercase letter.',
    //   })
    //   .regex(/[a-z]/, {
    //     message: 'Password must contain at least one lowercase letter.',
    //   })
    //   .regex(/[0-9]/, {
    //     message: 'Password must contain at least one number.',
    //   })
    //   .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    //     message: 'Password must contain at least one special character.',
    //   }),
    role: z.enum(VALUES, {
      required_error: 'Role is required.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      role: undefined,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    switch (values.role) {
      case 'staff':
          loginStaff(values.email, values.password);
          break;
      case 'tech':
          // Handle tech role
          break;
      case 'manager':
          // Handle manager role
          break;
      default:
          // Handle other cases or throw an error
          break;
  }
  }

  async function loginStaff(us: string , pw: string) {
    try {
        const res = await axios(loginStaffApi.login(us, pw))
        console.log(typeof res.data.statusCode)
        if (res.status === 201) {
            switch(res.data.statusCode){
              case 200:
                
                break;
              case 400:
                toast({
                  title: "Login Failed",
                  variant: "destructive",
                  description: "Bad Request",
                })
                break;
              case 401:
                console.log(1);
                toast({
                  title: "Login Failed",
                  variant: "destructive",
                  description: "Password not match",
                })
                break;
            }
              
        }
    } catch (error) {
        console.log(error);
        toast({
          title: "Login Failed",
          variant: "destructive",
          description: "Retry again",
        })
    }
  }
  // try {
    //     const res = await loginApi.login(values.email, values.password);
    //     if (res.status === 200) {
    //         if (res.data.data) {
    //             localStorage.setItem(
    //                 "Token",
    //                 res.data.data.token.token.accessToken
    //             );
    //             toastSuccess("Login Successfully");
    //             dispatch(actions.setUser(res.data.data.userInfo));
    //             const roles: string[] = res.data.data.token.roles;
    //             if (roles.includes("Admin")) {
    //                 navigate("/admin");
    //             } else if (roles.includes("Staff")) {
    //                 navigate("/staff");
    //             } else {
    //                 navigate("/home");
    //             }
    //         } else {
    //             toastError(res.data.messages[0].content);
    //         }
    //     } else {
    //         for (const mess of res.data.messages) {
    //             toastError(mess.content);
    //         }
    //     }
    // } catch (error) {
    //     console.log(error);
    //     toastError("Login Error,please try again");
    // }
  return (
    <div className={cn('grid gap-6 lg:mx-10', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <div className="flex justify-center items-center">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <SelectRole field={field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="border-yellowCustom text-black mb-2">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email..."
                        {...field}
                        className="text-black mb-4"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="border-yellowCustom text-black mb-2">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password..."
                        type="password"
                        {...field}
                        className="text-black mb-4"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-5" variant={'bluePrimary'} type="submit">
                Đăng nhập với Email
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="relative flex justify-center text-xs uppercase">
          <span className=" px-2 font-semibold text-muted-foreground ">
            Hoặc
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        <img src={Google} width={25} className="mr-3" />
        Đăng nhập với Google
      </Button>
    </div>
  );
};

export default LoginForm;
