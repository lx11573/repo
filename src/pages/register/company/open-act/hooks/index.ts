interface Address {
  columnIndex: number
  index: number
  indexs: any[]
}

export function usePublicAct() {
  const loading = ref(false)
  const actInfo = reactive({
    province: '',
    city: '',
    bankName: '',
    subBranch: '',
    bankId: '',
    companyId: '',
    bankPlace: '',
  })
  const addrPickerRef = ref()

  const provinces = ref([])
  const cities = ref([])
  const banks = ref([])
  const subBankNames = ref([])
  const subBankNumbers = ref([])
  const addressList = computed(() => [provinces.value, cities.value])
  function handleAddressChange(e: Address) {
    const { columnIndex, index, indexs } = e
    console.log('indexs', indexs)
    if (columnIndex === 0) {
      // TODO getCities
      // cities.value = getCities()
      addrPickerRef.value?.setIndexs([index, 0], true)
    }
    else {
      addrPickerRef.value?.setIndexs(indexs, true)
      // TODO getSubBanks()
      // TODO 需 bank province city 同时存在
      // subBankNames.value = getSubBankNames()
    }
  }
  const canGetSubBank = computed(() => actInfo.bankName && actInfo.province && actInfo.city)
  watchEffect(() => {
    if (actInfo.subBranch)
      getSubBankNumbers()
  })
  watch(() => actInfo.bankName, () => {
    Object.assign(actInfo, {
      subBranch: '',
      bankId: '',
    })
  })
  watch(() => actInfo.province, (province) => {
    if (province) {
      // actInfo.city = ''
    }
  })
  watchEffect(() => {
    canGetSubBank && getSubBankNames()
  })
  async function getSubBankNames() {
    // const result = await get(subBank.name)
    // subBankNumbers.value =
  }
  async function getSubBankNumbers() {
    // const result = await get(subBank.name)
    // subBankNumbers.value =
  }
  return {
    actInfo,
    loading,
    addrPickerRef,
    addressList,
    provinces,
    cities,
    banks,
    subBankNames,
    subBankNumbers,
    handleAddressChange,
  }
}
