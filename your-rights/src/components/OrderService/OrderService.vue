<template>
    <div id="orderServicePage">
        <OrderServiceList />
        <OrderServiceCreate />
    </div>
</template>

<script>

import OrderServiceList from '@/components/OrderService/OrderServiceList'
import OrderServiceCreate from '@/components/OrderService/OrderServiceCreate'

export default {
    data () {
      return {}
    },
    components: {
        OrderServiceList,
        OrderServiceCreate
    }
}
</script>