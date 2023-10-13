import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div class="container-fluid contact-us ">
                <h2 class="text-center">contact us</h2>
                <div class="row">
                    <form>
                        <div class="col-lg-12">
                            <input type="text" name="name" id="" placeholder="name"/>
                        </div>
                        <div class="col-lg-12">
                            <input type="email" name="email" id="" placeholder="E-mail"/>
                        </div>
                        <div class="col-md-12">
                            <textarea name="message" id="" placeholder="message"></textarea>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" value="send"/>
                        </div>
                    </form>
                </div>
                <div class="by">
                    <h4>By</h4>
                    <h3>Sayed osama</h3>
                </div>
            </div>
        </div>
    )
}

export default ContactUs