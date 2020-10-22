import React, { ReactElement } from "react";
import {
	AppBar,
	IconButton,
	InputBase,
	Toolbar,
	Badge,
	Typography,
} from "@material-ui/core";
import {
	Menu as MenuIcon,
	Search as SearchIcon,
	Mail as MailIcon,
	Notifications as NotificationsIcon,
	AccountCircle,
	More as MoreIcon,
} from "@material-ui/icons";

interface Props {}

export default function Header({}: Props): ReactElement {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					Material-UI
				</Typography>
				<div>
					<div>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
				<div />
				<div>
					<IconButton aria-label="show 4 new mails" color="inherit">
						<Badge badgeContent={4} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>
					<IconButton
						aria-label="show 17 new notifications"
						color="inherit"
					>
						<Badge badgeContent={17} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton
						edge="end"
						aria-label="account of current user"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
				</div>
				<div>
					<IconButton
						aria-label="show more"
						aria-haspopup="true"
						color="inherit"
					>
						<MoreIcon />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
}
