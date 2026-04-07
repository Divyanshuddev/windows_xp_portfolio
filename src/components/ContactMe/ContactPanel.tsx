import { Grid, Input, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setNewMessage, setSendMessage } from "../../features/WindowSlice/WindowSlice";
const styles = {
    root: {
        backgroundColor: "#e9e9e9",
        width: 567,
        height: 372,
        padding: 2,
    },
    input: {
        border: "1px solid #d4d2d2",
        boxShadow: "inset 1px 2.5px 2.5px gray",
        fontSize: 13,
        borderRadius: 0.7,
        paddingLeft: 1,
        paddingRight: 0.5,
        backgroundColor: "white"
    },
    toInput: {
        border: "1px solid #d4d2d2",
        boxShadow: "inset 1px 2.5px 2.5px gray",
        fontSize: 13,
        borderRadius: 0.7,
        paddingLeft: 1,
        paddingRight: 0.5,
        backgroundColor: "white"
    },
    heading: {
        color: "black",
        fontSize: 12
    }
}
interface FormState {
    from: string;
    subject: string;
    message: string;
}
interface ErrorState {
    from?: string;
    subject?: string;
    message?: string;
}
const ContactPanel = () => {
    const sendMessage = useSelector((state: RootState) => state.window.sendMessage)
    const newMessage = useSelector((state: RootState) => state.window.newMessage)
    const dispatch = useDispatch();
    const [form, setForm] = useState<FormState>({
        from: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<ErrorState>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const validate = () => {
        let tempErrors: ErrorState = {};

        if (!form.from) {
            tempErrors.from = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.from)) {
            tempErrors.from = "Invalid email";
        }

        if (!form.subject) {
            tempErrors.subject = "Subject is required";
        }

        if (!form.message) {
            tempErrors.message = "Message is required";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    const handleSendMessage = () => {
        if (!validate()) return;

        const mailto = `mailto:divyanshu311098@gmail.com?subject=${encodeURIComponent(
            form.subject
        )}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.from}`;

        window.location.href = mailto;
    }
    useEffect(() => {
        if (!sendMessage) return;

        handleSendMessage();

        dispatch(setSendMessage(false));
    }, [sendMessage])


    const handleNewMessage = () => {
        setForm({
            from: "",
            subject: "",
            message: "",
        });
        setErrors({});
    };

    useEffect(() => {
        if (!newMessage) return;

        handleNewMessage();

        dispatch(setNewMessage(false));
    }, [newMessage])
    return (
        <Stack sx={styles.root}>
            <Grid container rowGap={1} width={"100%"} spacing={1} >
                <Grid size={2} sx={{ placeItems: "end" }} alignSelf={'center'}>
                    <Typography sx={styles.heading}>To:</Typography>
                </Grid>
                <Grid size={10}>
                    <Input sx={styles.toInput} disableUnderline fullWidth value={'Divyanshu Sharma < divyanshu311098@gmail.com >'} disabled />
                </Grid>
                <Grid size={2} sx={{ placeItems: "end" }} alignSelf={'center'}>
                    <Typography sx={styles.heading}>From:</Typography>
                </Grid>
                <Grid size={10}>
                    <Input sx={styles.input} disableUnderline fullWidth placeholder="Your email address" type="email"
                        name="from"
                        value={form.from}
                        onChange={handleChange}
                    />
                    {errors.from && (
                        <Typography color="red" fontSize={10}>
                            {errors.from}
                        </Typography>
                    )}
                </Grid>
                <Grid size={2} sx={{ placeItems: "end" }} alignSelf={'center'}>
                    <Typography sx={styles.heading}>Subject:</Typography>
                </Grid>
                <Grid size={10}>
                    <Input sx={styles.input} disableUnderline fullWidth placeholder="Subject of your Message"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && (
                        <Typography color="red" fontSize={10}>
                            {errors.subject}
                        </Typography>
                    )}
                </Grid>
                <Grid size={12}>
                    <Input sx={styles.input} disableUnderline fullWidth multiline minRows={12} placeholder="Write your message here"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    />
                    {errors.message && (
                        <Typography color="red" fontSize={10}>
                            {errors.message}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Stack>
    )
}
export default ContactPanel