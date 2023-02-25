export const playerApater = async (data) => {
    return data.map((item) => {
        return {
            id: item._id,
            name: item.name,
            pref: item.preferred_position ? item.preferred_position : 'Not defined'
        }
    })
}