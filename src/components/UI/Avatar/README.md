# Avatar

### Display an avatar

You can use an avitar to display ownership of an item of content. If you pass a URL of an image that will be displayed otherwise the first letter of the name will be used to display a branded avitar. 

### Try it out

```.jsx
<React.Fragment>
  <Avatar />
  <Avatar name="Sam" size="small" />
  <Avatar name="Sam" size="medium" />
  <Avatar name="Sam" size="large" />
  <Avatar
    name="Sam"
    url="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"
  />
</React.Fragment>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| name | String | | Anonymous | Title to be displayed as primary text |
| size | String | "small" "medium" "large" | "medium" | Define the size of the avatar |
| url | String | | | URL of  image for avatar |

