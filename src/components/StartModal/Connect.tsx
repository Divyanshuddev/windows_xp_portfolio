import { Divider, Stack, } from "@mui/material"
import RecentlyUsed from "./RecentlyUsed"
import ConnectionList from "./ConnectionList"


const Connect = () => {

    return (
        <Stack>
            <ConnectionList start={0} end={3} />
            <Divider />
            <RecentlyUsed />
            <Divider />
            <ConnectionList start={3} end={5} />
        </Stack>
    )
}

export default Connect


