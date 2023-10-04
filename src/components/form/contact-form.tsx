import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { GitHubLogoIcon, ResetIcon, RocketIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import { Reducer, useReducer, useState } from "react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface StateType {
  name: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

const defaults: StateType = {
  name: "",
  email: "",
  tel: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useReducer<Reducer<StateType, Partial<StateType>>>(
    (currentState, newState) => ({ ...currentState, ...newState }),
    defaults
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Do the action in the Form HTML element
    // @ts-ignore
    const action = e?.target?.action;

    if (!action) {
      return;
    }

    if (!state.tel || !state.email) {
      console.error("Please provide a phone number or email address.");
    }

    setIsLoading(true);
    const res = await fetch(action, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Not ok");
        }
      })
      .then((data) => {
        if (data?.error) {
          throw new Error(data.error);
        }

        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleReset = () => {
    setState(defaults);
  };

  return (
    <div className="my-6">
      <form
        onSubmit={handleSubmit}
        action="https://phpstack-1011481-3573429.cloudwaysapps.com/io.php"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Me</CardTitle>

            <CardDescription>
              I&apos;m available to lead your next project, build your next
              product, or help you with your next idea.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="tel">Phone</Label>
              <Input
                id="tel"
                type="tel"
                name="tel"
                autoComplete="tel"
                placeholder="+1 (415) 444-6660"
                onChange={handleChange}
                value={state.tel}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">
                  Or
                </span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="richard@piedpiper.com"
                onChange={handleChange}
                value={state.email}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">
                Name<sup>*</sup>
              </Label>
              <Input
                required
                id="name"
                type="name"
                name="name"
                autoComplete="name"
                placeholder="Emmett Brown"
                onChange={handleChange}
                value={state.name}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="I need help with..."
                onChange={handleChange}
                value={state.subject}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">
                Message<sup>*</sup>
              </Label>
              <Textarea
                required
                id="message"
                name="message"
                placeholder="Please describe your project or issue..."
                onChange={handleChange}
                value={state.message}
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end space-x-2">
            <Button type="button" variant="ghost" onClick={handleReset}>
              Reset <ResetIcon className="ml-2" />
            </Button>
            <SubmitButton pending={isLoading} />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

const SubmitButton = ({ pending }: { pending?: boolean }) => {
  //   const { pending } = useFormStatus();
  return (
    <Button type="submit" {...(pending ? { disabled: true } : {})}>
      Submit{" "}
      {pending ? (
        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
      ) : (
        <RocketIcon className="ml-2" />
      )}
    </Button>
  );
};

export default ContactForm;
