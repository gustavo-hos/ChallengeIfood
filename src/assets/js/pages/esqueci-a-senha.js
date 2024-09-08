import 'reflect-metadata';
import $ from 'jquery'
import container from '../inversify/inversify.config';
import TYPES from '../inversify/types';
import { ROUTES, sleep } from '../util/util';

const _toasterService = container.get(TYPES.ToasterService);

const EMAIL = "admin@admin.com.br"

$(() => {
    $("button#forgot").on("click", async () => {
        let email = $("input#email").val();
        
        if(!email || email !== EMAIL) {
            _toasterService.alert("Email invalido.", 5);
            return;
        }

        _toasterService.alert("Email de recuperacao enviado.", 5);

        await sleep(3e3);

        window.location.href = ROUTES.LOGIN;
    });
});