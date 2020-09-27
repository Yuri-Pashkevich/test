export const fetchData = async () => {

    //getting goods data 
    const jsonData = await fetch('/data.json')
    const allData = await jsonData.json()
    const data = allData.Value.Goods
    
    //getting names of goods data  
    const jsonNames = await fetch('/names.json')
    const names = await jsonNames.json()

    //split names data by groups
    const bookNames = names[1]
    const foodNames = names[2]
    const sportsNames = names[5]
    const carPartsNames = names[10]
    const souvenirNames = names[15]

    //split goods data by groups
    const getGoodsData = group => data.filter(item => item.G === group)

    const bookData = getGoodsData(1)
    const foodData = getGoodsData(2)
    const sportsData = getGoodsData(5)
    const carPartsData = getGoodsData(10)
    const souvenirData = getGoodsData(15)

    //dollar exchange rate to BYN
    const exchangeRates = 2.6

    //transformimg all data in new arrays with updated objects
    const transformData = ( names, data ) => {
        const newArr = data.map(item => {
            for(let key in names.B) {
                if(+key === item.T) {
                    item = {
                        name: names.B[key].N,
                        id: item.T,
                        quantity: item.P,
                        price: Math.ceil(item.C * exchangeRates),
                        group: names.G
                    } 
                }
            }
            return item
        })
        return newArr
    }
    
    const newBookData = transformData(bookNames, bookData)
    const newFoodData = transformData(foodNames, foodData)
    const newSportsData = transformData(sportsNames, sportsData)
    const newCarPartsData = transformData(carPartsNames, carPartsData)
    const newSouvenirData = transformData(souvenirNames, souvenirData)

    const newData = [...newBookData, ...newFoodData, ...newSportsData, ...newCarPartsData, ...newSouvenirData]
    return newData
}