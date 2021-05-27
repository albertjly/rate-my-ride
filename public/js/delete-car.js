async function deleteFormHandler(event) {
  event.preventDefault();

  const car_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/cars/${car_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    window.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  };
};

document.querySelector('.delete-car-btn').addEventListener('click', deleteFormHandler);