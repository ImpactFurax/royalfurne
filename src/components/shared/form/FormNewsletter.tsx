import { formNewsletter } from "@/lib/validator/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { IoIosArrowRoundForward } from "react-icons/io";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const FormNewsletter = () => {
  const form = useForm<z.infer<typeof formNewsletter>>({
    resolver: zodResolver(formNewsletter),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formNewsletter>) => {
    console.log(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex border-b-2 border-[#8A8A8A]">
                <FormControl>
                  <Input autoComplete="off" type="email" placeholder="Enter Your Email" {...field} className="h-[54px] focus-visible:ring-offset-0 py-3 border-none focus-visible:ring-transparent bg-transparent font-montserrat text-xl p-0 placeholder:font-cinzel" />
                </FormControl>
                <Button className="p-0" type="submit"><IoIosArrowRoundForward color="#8A8A8A" size={40} /></Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default FormNewsletter