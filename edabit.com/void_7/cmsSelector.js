function cmsSelector(arr, str) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arrN = arr[i].toLowerCase();
    if (arrN.includes(str)){
      newArr.push(arr[i]);
    }
  }
  return newArr.sort();
}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal" ], "w"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "ru"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], ""));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "oJ"));
