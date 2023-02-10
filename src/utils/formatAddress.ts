interface Option {
  value: string ;
  label: string;
  children?: Option[];
}

const formatAddress = (address: any[]) => {
  let result: Option[] = []
  address.forEach(item => {
    let temp:Option = {
      value: "",
      label: ""
    }
    temp.value = item.name
    temp.label = item.name 
    if (item.city) {
      temp.children = []
      item.city.forEach((city: { name: any; area: string[]; }) => {
        temp.children!.push({
          value: city.name,
          label: city.name,
          children: city.area ? city.area.map((area:string) => ({ value: area, label: area })) : []
        })
      });

    }
    result.push(temp)
  });
  return result
}

export {
  formatAddress
}