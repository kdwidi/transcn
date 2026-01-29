import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { toast } from "sonner"
import { SessionContext } from "@/context/session"

const formSchema = z.object({
  email: z.email("Format email tidak valid."),
  password: z.string().min(6, { error: "Password minimal 6 karakter." }),
})

export default function Login() {
  const session = useContext(SessionContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "", }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await fetch("https://fe-test.salokapark.app/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      })
    })

    if (result.status !== 200) {
      toast.error("Terjadi kesalahan: error code " + result.status);
      return
    }

    const body = await result.json();
    if (!body.success) {
      toast.error("Login Gagal");
      return;
    };
    const user = body.user;
    const token = body.token;
    session?.create(user, token)
  }

  return (
    <div className="w-full max-w-md mx-auto mt-[calc(50vh-237px)] px-8">
      <div className="font-semibold text-center text-xl mb-18">Login Kasirku</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-auto cursor-pointer">Login</Button>
        </form>
      </Form>
    </div>
  )
}
