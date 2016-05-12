# Dialog

Dialogs are screens meant to be blocking and require an interaction for the user to proceed. There are several formats of them, but they more or less follow the same rules:

- On mobile, dialogs take up the full screen, and are designed to look like native applications and mimic the native interactions.
- On desktop, dialogs are formatted with more or less the same structure as in mobile, but the are positioned in the center of the screen with a black or white semi transparent overlay covering the rest of the screen so it's not possible to interact with whatever is in the background.

There are two components in this feature. One is the [dialog itself](examples/base/dialog.html) which provides the layout for the inside of the dialog. The other one is the [smoke overlay](examples/base/overlay.html)

Given their fullscreen nature, dialogs cannot be shown inline in the showroom.

- [Default dialog](examples/base/dialog.html)
- [Default dialog in overlay](examples/base/overlay.html)
- [Wide dialog in overlay](examples/base/overlay-wide.html)
