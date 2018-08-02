<template>
    <b-container>       
        <b-form inline>
            <b-form-group>
                <b-form-input id="runnersNameInput"
                type="text"
                v-model="form.runnersName"
                required
                placeholder="Enter your name">
                </b-form-input>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form-group>     
        </b-form>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            form: {
                runnersName: ''
            }
        }
   }
}
</script>