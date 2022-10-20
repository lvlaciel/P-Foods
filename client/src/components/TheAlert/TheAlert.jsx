import React from "react";
import Swal from "sweetalert2";

export function TheAlert() {

    return (
        <div>
            ¨{Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue?',
                icon: 'error',
                confirmButtonText: 'OK'

            })}

        </div>
    )
}