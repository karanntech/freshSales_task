
exports.createContact = async (req, res) => {
  try {
    const contact = await freshSalesService.createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await freshSalesService.getContact(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await freshSalesService.updateContact(req.params.id, req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await freshSalesService.deleteContact(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
