<template>
    <div class="message">
        <p>
            {{
                message
            }}
        </p>
    </div>

</template>

<script>
export default {
    // передача пропс, точнее их прием 
    props: {
        message: {
            // тип пропс
            type: String,
            // 
            required: true,
            default: 'default message'
        }
    }
}
</script>
<style lang="scss" scoped>
    p {
        color: red;
        text-align: center;
        margin: 1rem auto;
    }
</style>