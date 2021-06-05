async function newFormHandler(event) {
  event.preventDefault();

  const image_url = document.querySelector('input[name="car-image"]').value;
  const make = document.querySelector('input[name="car-make"]').value;
  const model = document.querySelector('input[name="car-model"]').value;
  const year = document.querySelector('input[name="car-year"]').value;
  const color = document.querySelector('input[name="car-color"]').value;
  const description = document.querySelector('textarea[name="car-description"]').value;

  const response = await fetch(`/api/cars`, {
    method: 'POST',
    body: JSON.stringify({
      image_url,
      make,
      model,
      year,
      color,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-car-form').addEventListener('submit', newFormHandler);