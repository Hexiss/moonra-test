<template>
    <div class="vue-tempalte">
        <form>
            <h3>Connexion</h3>

            <div class="form-group">
                <label>Adresse mail</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Se connecter</button>

            <p>
                <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
            </p>

            <p>
                <router-link to="/Signup">Créer un compte</router-link>
            </p>

        </form>
    </div>
</template>

<style scoped>
button {
padding: 0.8rem 1rem 0.7rem;
}

form {
    text-align: center;
    padding: 10rem 10rem;
}
</style>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>